import { previewData } from "next/headers";


export default function HomePage() {
    if(previewData()) {
        return <div>Preview mode</div>
    }
    return (
        <div>
            <h1 className="text-4xl">Welcome</h1>
        </div>
    )
}