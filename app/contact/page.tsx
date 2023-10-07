import Link from "next/link";

export default function ContactPage() {
  return (
    <div
      className={`grow px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 flex flex-col justify-center items-center gap-10`}
    >
      <h4 className={`text-2xl sm:text-3xl font-medium`}>
        Get in Touch with Us
      </h4>
      <div
        className={`max-w-3xl grow flex flex-col justify-around items-center gap-10`}
      >
        <div className={`max-w-3xl flex flex-col gap-2`}>
          <p className={`sm:text-lg px-2`}>
            We value your inquiries and are here to assist you. Feel free to
            reach out for any questions, collaborations, or consultations.
          </p>
        </div>
        <div className={`border border-slate-400 px-4 py-2`}>
          <table>
            <thead className={`border-b border-slate-400`}>
              <tr>
                <th className={`px-4 py-2`}>Contact Information:</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`flex flex-col sm:table-row divide-none sm:divide-x divide-slate-400 pt-2`}
              >
                <td>Email</td>
                <td className={`px-4 py-2`}>
                  <Link href={`mailto:info@example.com`}>info@example.com</Link>
                </td>
              </tr>
              <tr
                className={`flex flex-col sm:table-row divide-none sm:divide-x divide-slate-400`}
              >
                <td>Phone</td>
                <td className={`px-4 py-2`}>
                  <Link href={`tel:+1234567890`}>+1 (234) 567-890</Link>
                </td>
              </tr>
              <tr
                className={`flex flex-col sm:table-row divide-none sm:divide-x divide-slate-400`}
              >
                <td>Address</td>
                <td className={`px-4 py-2`}>
                  123 Digital Avenue, Tech City, TC 12345
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`max-w-3xl flex flex-col gap-2`}>
          <h4 className={`text-xl sm:text-2xl font-medium`}>Stay Connected:</h4>
          <p className={`sm:text-lg px-2`}>
            Follow us on social media for updates, tips, and inspirations.
            @EchoElevate
          </p>
        </div>
      </div>
    </div>
  );
}
