import React from "react";
import useGithub from "../../hooks/github-hooks";
import Generics from "../generic";
import StatusCount from "../statusCount"
import * as S from "./styled";

const Profile = () => {
    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
            <S.WrapperInfoUser>
                <Generics />
                <StatusCount />
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
};

export default Profile;