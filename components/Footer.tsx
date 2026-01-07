export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-xl">Travila</h4>
          <p className="text-xl mt-2 opacity-70">
            Your trusted flight partner.
          </p>
        </div>

        {["Company", "Support", "Legal"].map((list) => (
          <div key={list}>
            <h5 className="font-bold mb-3">{list}</h5>
            <ul className="space-y-2 text-md opacity-70">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
