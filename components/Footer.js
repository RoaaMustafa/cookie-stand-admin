export default function Footer({reports}) {

    return (
        <footer className="flex items-center justify-between p-4 bg-green-500 text-gray-50">
            <h1 className="text-xl"> {reports.length} Locations World Wide</h1>
            <h1 className="text-xl">2021</h1>
            
        </footer>
    )
}