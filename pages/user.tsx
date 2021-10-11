import {getSession} from "next-auth/client";

const User = () => {
    return (
        <h2>유저 화면 입니다.</h2>
    )
}
export const getServerSideProps = async(ctx) => {
    const session = await getSession(ctx);
    console.log(session);

    return {props: {}};
}

export default User;