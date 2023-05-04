import { useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';
import { Button } from "@mui/material";

const Results = ({name, score}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!name) {
            navigate("/")
        }

    }, [name, navigate])

    return ( 
        <div className="result">
            <span className="header">Final Score : {score}</span>
            <Button
             variant="contained"
             color="secondary"
             size="large"
             style={{ alignSelf: "center", marginTop: 20}}
             component={Link}
             to="/"
            >Go To Homepage</Button>
        </div>
    );
}
 
export default Results;