export default function RatingEstrellasStatic({ valor }) {
    const estrellas = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {estrellas.map((num) => (
                <span
                    key={num}
                    className={num <= valor ? "llena" : "vacia"}
                    style={{
                        fontSize: "24px",
                        cursor: "pointer",
                        color: num <= valor ? "gold" : "gray"
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
}