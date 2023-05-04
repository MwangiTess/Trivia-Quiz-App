const ErrorMessage = ({ children }) => {
    return (
        <div
        style={{
           width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            backgroundColor: "maroon",
            textAlign: "center",
            color: "white",
            textTransform: "uppercase"
        }}
        >
          {children}  
        </div>
    );
};
 
export default ErrorMessage;