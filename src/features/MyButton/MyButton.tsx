// type MyButtonProps = {
//     onClick: () => void;
//     children: React.ReactNode; //apvienoti visi saturamie tipi- number, string, null utt
// }

// export default function MyButton({onClick, children}: MyButtonProps) {
//   return (
//    <button
//       onClick={onClick}
//       style={{
//         backgroundColor: "#1a5492ff",
//         color: "white",
//         border: "none",
//         borderRadius: "4px",
//         padding: "5px 10px",
//         cursor: "pointer",
//         fontSize: "1rem",
//         margin: "7px",
//         transition: "background-color 0.3s",
//       }}
//         >
//       {children}
//     </button>
//   )
// }


type MyButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
}

export default function MyButton({ onClick, children, variant = 'primary' }: MyButtonProps) {
  const getButtonStyle = () => {
    const baseStyle = {
      border: "none",
      borderRadius: "8px",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "1rem",
      margin: "5px",
      transition: "all 0.3s ease",
      fontWeight: "600" as const,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          background: "linear-gradient(90deg, #66a6ff, #89f7fe)",
          color: "#1a1a1a",
        };
      case 'secondary':
        return {
          ...baseStyle,
          background: "rgba(255, 255, 255, 0.1)",
          color: "#f0f0f0",
          border: "1px solid #404040",
        };
      case 'danger':
        return {
          ...baseStyle,
          background: "linear-gradient(90deg, #ff6b6b, #ff8787)",
          color: "#1a1a1a",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <button
      onClick={onClick}
      style={getButtonStyle()}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
}