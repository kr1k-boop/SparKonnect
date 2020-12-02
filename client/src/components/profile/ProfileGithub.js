import React, {useEffect} from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getGitHubRepos } from '../../actions/profile'

const ProfileGithub = ({ username, getGitHubRepos, repos}) => {
    useEffect(() => {
        getGitHubRepos(username)
    }, [getGitHubRepos, username])
    return (
        <div  className="profile-github">
        <h2 className="text-primary my-1">Github Repos</h2>  
        {repos === null ? <Spinner/> : (
            repos.map(repo => (
                <div key={repo.id} className="repo bg-white p-1 my-1">
                    <h4>
                        <a href={repo.html_url} target="_blank" rel='noopener noreferrer'>
                            {repo.name}
                        </a>
                    </h4>
                 </div>   
            ))
        )}  
        </div>
    )
}

ProfileGithub.propTypes = {
   getGitHubRepos: propTypes.func.isRequired,
   repos: propTypes.array.isRequired,
   username: propTypes.string.isRequired
}

const mapStateToProps = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getGitHubRepos })(ProfileGithub)
