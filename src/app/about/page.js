export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="bg-white rounded-lg shadow-md max-w-5xl w-full p-8 md:flex md:space-x-8">
        {/* Left: Text */}
        <div className="md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">About Dr. Jennifer Hahm</h1>
          <p className="mb-4 text-gray-700">
            Finding time and opportunities to care for ourselves can be incredibly challenging in today’s busy and demanding world.
            I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice.
            Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being,
            recognizing that these aspects vary from person to person.
          </p>
          <p className="mb-4 text-gray-700">
            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion,
            and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School
            of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy
            and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
          </p>
          <p className="text-gray-700">
            My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism,
            family systems theory, acceptance and commitment concepts, and mindfulness practices.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
          <img
            src="/dr.jpg"
            alt="Dr. Jennifer Hahm"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
