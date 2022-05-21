import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Generics = () => {
    const { githubState } = useGithub();

    return (
        <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUserGeneric>
                <h3>UserName: </h3>
                <a href={githubState.user.html_url}
                    target="_blank"
                    rel="noreferrer">
                    {githubState.user.login}
                </a>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
                <h3>Company: </h3>
                <span>{githubState.user.company}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
                <h3>Location: </h3>
                <span>{githubState.user.location}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
                <h3>Blog: </h3>
                <a href={githubState.user.blog}
                    target="_blank"
                    rel="noreferrer">
                    {githubState.user.blog}
                </a>
            </S.WrapperUserGeneric>
        </div>
    );
}

export default Generics;