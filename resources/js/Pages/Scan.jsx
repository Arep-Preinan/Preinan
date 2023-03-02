import { Head } from "@inertiajs/react"

const Scan = (props) => {
    console.log(props)
    return(
        <div class="flex justify-center items-center h-screen">
            <Head title="Scan Tiket" />
            <div class={`w-64 h-64 border-2 ${props.valid ? "border-green-600" : "border-red-700"} rounded-lg flex items-center justify-center`}>
                <p>{
                    props.valid ? "Tiket Valid" : "Tiket Tidak Valid"
                }</p>
            </div>
        </div>

    )
}

export default Scan