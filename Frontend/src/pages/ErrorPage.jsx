const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
            <p className="text-lg mt-2">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Go Home</a>
        </div>
    );
};

export default ErrorPage;
