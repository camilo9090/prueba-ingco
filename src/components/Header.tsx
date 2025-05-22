

export default function Header() {
    return (
        <header className="bg-gray-700 shadow-neutral-200 p-5">
            <div className="mx-auto p-3">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="/">

                            <img
                                className="w-25"
                                src="/logo.png" alt="logotipo" />
                        </a>
                    </div>

                </div>
            </div>

        </header>
    )
}
