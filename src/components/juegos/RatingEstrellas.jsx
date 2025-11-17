export default function RatingEstrellas({ rating, setRating }) {
    return (
        <div style={{ display: "flex", gap: "5px" }}>
            {[1, 2, 3, 4, 5].map((i) => (
                <span
                    key={i}
                    style={{
                        fontSize: "24px",
                        cursor: "pointer",
                        color: i <= rating ? "gold" : "gray"
                    }}
                    onClick={() => setRating(i)}
                >
                    ★
                </span>
            ))}
        </div>
    );
}
