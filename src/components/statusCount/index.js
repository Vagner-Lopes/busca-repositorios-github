import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const StatusCount = () => {
    const { githubState } = useGithub();
    
    return (
        <S.WrapperStatusCount>
            <div>
                <h4>Followers</h4>
                <span>{githubState.user.followers}</span>
            </div>
            <div>
                <h4>Followings</h4>
                <span>{githubState.user.following}</span>
            </div>
            <div>
                <h4>Gits</h4>
                <span>{githubState.user.public_gits}</span>
            </div>
            <div>
                <h4>Repos</h4>
                <span>{githubState.user.public_repos}</span>
            </div>
        </S.WrapperStatusCount>
    );
}

export default StatusCount;
