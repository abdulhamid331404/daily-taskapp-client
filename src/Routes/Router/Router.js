const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: AddTask } = require("../../Pages/AddTask/AddTask");
const { default: CompleatTask } = require("../../Pages/CompleatTask/CompleatTask");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: LogIn } = require("../../Pages/Home/LogIn/LogIn");
const { default: SignUp } = require("../../Pages/Home/SignUp/SignUp");
const { default: MyTask } = require("../../Pages/MyTask/MyTask");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/compleattask',
                element: <CompleatTask></CompleatTask>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;