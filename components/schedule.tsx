export default function Schedule() {
  const scheduleItems = [
    {
      day: "Martes",
      time: "08:00 - 10:30 AM",
    },
    {
      day: "Jueves",
      time: "19:00 - 21:30 PM",
    },
    {
      day: "Viernes",
      time: "19:00 - 21:30 PM",
    },
    {
      day: "Sábado",
      time: "No hay horarios disponibles.",
    },
  ]

  return (
    <section id="horarios" className="py-16 px-4 md:px-12 bg-[#f4f4f4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#333]">Horarios</h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-center">
            <thead>
              <tr>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">Día</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">08:00 AM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">09:00 AM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">10:00 AM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">11:00 AM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">12:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">01:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">02:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">03:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">04:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">05:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">06:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">07:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">08:00 PM</th>
                <th className="border border-[#ddd] p-3 bg-[#8A9A5B] text-white">09:00 PM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#ddd] p-3 font-bold bg-[#e9e9e9]">Martes</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
              </tr>
              <tr>
                <td className="border border-[#ddd] p-3 font-bold bg-[#e9e9e9]">Jueves</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
              </tr>
              <tr>
                <td className="border border-[#ddd] p-3 font-bold bg-[#e9e9e9]">Viernes</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
                <td className="border border-[#ddd] p-3 bg-white">X</td>
              </tr>
              <tr>
                <td className="border border-[#ddd] p-3 font-bold bg-[#e9e9e9]">Sábado</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
                <td className="border border-[#ddd] p-3 bg-white">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Schedule */}
        <div className="md:hidden flex flex-col gap-4">
          {scheduleItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#8A9A5B] text-left">
              <h3 className="text-[#8A9A5B] text-xl font-medium mb-1">{item.day}</h3>
              <p className="text-[#333]">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
