import { useNavigate } from "react-router-dom";

export default function PokemonEditor() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)}>Go back to main menu</button>
        </>
    );
}