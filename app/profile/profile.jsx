"use client"

export default function Profile({ session }) {
    function handleLogOut() {
        console.log('Here');
        
    }
    const {name, email, picture} = session.user
        return (
            <main className="mx-auto max-w-2xl p-8">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="text-center">
                        <h1 className="scroll-m-20 text-4xl font-semibold mb-2">Welcome {name}</h1>
                        <img 
                            src={picture}
                            alt="Profile Picture"
                            className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-white"
                        />
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="text-gray-600">Name</span>
                                <span className="text-lg font-medium">{name}</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="text-gray-600">Email</span>
                                <span className="text-lg font-medium">{email}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <a
                        href="/api/auth/logout"
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md"
                    >
                        Log Out
                    </a>
                </div>
            </main>
        )
    }