export default function Card({ title, children }) {

    return (

        <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur">

            <h3 className="text-xl font-bold mb-4">

                {title}

            </h3>

            {children}

        </div>

    )

}