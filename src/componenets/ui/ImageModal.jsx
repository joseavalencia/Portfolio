import { X } from "lucide-react";
import { useEffect } from "react";

export const ImageModal = ({ isOpen, onClose, image, title }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-4xl max-h-[90vh] mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Title */}
        <h3 className="text-white text-center mt-4 text-lg font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
}; 