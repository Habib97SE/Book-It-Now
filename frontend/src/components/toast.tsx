"use client";
import { useEffect, useState } from "react";

function Toast({
    message,
    type,
    onClose,
}: {
    message: string;
    type: "success" | "error" | "warning" | "info";
    onClose?: () => void;
}) {
    const [visible, setVisible] = useState(true);

    // Map to assign Tailwind alert classes
    const alertClassMap = {
        success: "alert-success",
        error: "alert-error",
        warning: "alert-warning",
        info: "alert-info",
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false); // Hide the toast
            onClose?.(); // Notify parent to clean up if necessary
        }, 5000); // 5 seconds

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [onClose]);

    if (!visible) return null;

    return (
        <div className="toast toast-start">
            <div className={`alert ${alertClassMap[type]} shadow-lg`}>
                <span>{message}</span>
            </div>
        </div>
    );
}

export { Toast };
