// import Layout from '/var/www/html/resources/js/Pages/Home';

type User = {
    name: string;
};

type HomeProps = {
    user: User;
};

const Home: React.FC<HomeProps> = ({ user }) => {
    return (
        <>
            <h1>Welcome</h1>
            <p>Hello {user.name},welcome to your first Inertia app!</p>
        </>
    );
};

export default Home;
