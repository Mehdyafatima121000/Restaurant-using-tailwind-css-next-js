export default function Menu() {
  return (
      <div className="p-4"> {/* Add padding for better spacing */}
          <h1 className="text-2xl font-bold mb-4">Our Speciality</h1> {/* Add a heading for clarity */}
          <ul className="list-disc list-inside"> {/* Use a list for the services */}
              <li>Matka Biryani (served with Makhni Lassi)</li>
              <li> Dream Role (loaded with cheese sauce)</li>
              <li>Burger (with melted honey mustart sause)</li>
          </ul>
      </div>
  );
}
