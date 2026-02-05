import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    const hoverRef = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable')
            ) {
                hoverRef.current = true;
            }
        };

        const handleMouseOut = () => {
            hoverRef.current = false;
        };

        // Initialize
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        // Snake Settings
        const trailLength = 50;
        let width = 8; // Base width

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new point at mouse position
            pointsRef.current.push({ ...mouseRef.current });

            // Maintain specific trail length
            if (pointsRef.current.length > trailLength) {
                pointsRef.current.shift();
            }

            // Draw the snake
            if (pointsRef.current.length > 1) {
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                // Hover Effect: Thicker & Different Color
                const isHovering = hoverRef.current;
                const targetWidth = isHovering ? 12 : 8;
                width += (targetWidth - width) * 0.1; // Smooth transition

                // Create Gradient Stroke
                const gradient = ctx.createLinearGradient(
                    pointsRef.current[0].x, pointsRef.current[0].y,
                    pointsRef.current[pointsRef.current.length - 1].x, pointsRef.current[pointsRef.current.length - 1].y
                );

                if (isHovering) {
                    gradient.addColorStop(0, 'rgba(56, 189, 248, 0)'); // Cyan fade
                    gradient.addColorStop(1, '#0ea5e9'); // Cyan Head
                } else {
                    gradient.addColorStop(0, 'rgba(236, 72, 153, 0)'); // Pink fade
                    gradient.addColorStop(1, '#f97316'); // Orange Head
                }

                ctx.beginPath();
                ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

                // Curve through points
                for (let i = 1; i < pointsRef.current.length - 2; i++) {
                    const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
                    const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
                    ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
                }

                if (pointsRef.current.length > 2) {
                    ctx.quadraticCurveTo(
                        pointsRef.current[pointsRef.current.length - 2].x,
                        pointsRef.current[pointsRef.current.length - 2].y,
                        pointsRef.current[pointsRef.current.length - 1].x,
                        pointsRef.current[pointsRef.current.length - 1].y
                    );
                }

                ctx.lineWidth = width;
                ctx.strokeStyle = gradient;
                ctx.stroke();

                // Snake Head
                const head = pointsRef.current[pointsRef.current.length - 1];
                ctx.beginPath();
                ctx.arc(head.x, head.y, width / 1.5, 0, Math.PI * 2);
                ctx.fillStyle = isHovering ? '#fff' : '#fff';
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="snake-cursor"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                zIndex: 9999,
                // mixBlendMode removed for better visibility on light theme
            }}
        />
    );
};

export default CustomCursor;
