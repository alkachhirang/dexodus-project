import { useEffect, useState } from "react";

// Define the BackToTop component
const BackToTop = () => {
  // State to keep track of visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect hook to add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Render the button only if isVisible is true
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="py-3 px-4 bg-pink text-white rounded-full shadow-lg hover:bg-purple focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTop;
