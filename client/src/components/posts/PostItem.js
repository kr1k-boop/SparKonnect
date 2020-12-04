import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {addLike, removeLike, deletePost,addrequest,rrequest} from '../../actions/post'

const PostItem = ({ deletePost, addLike, removeLike,addrequest,rrequest, auth, post: {_id, text, name, avatar, user, likes,Requests,comments, date}, showActions}) => {
    return (
        <div class="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                class="round-img"
                src={avatar}
                alt=""/>
              <h4>{name}</h4>
              </Link>
          </div>
          <div>
            <p class="my-1">
            {text}
            </p>
             <p class="post-date">
                Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>
            {showActions && <Fragment>
                <button onClick= {e => addLike(_id)} type="button" class="btn btn-light">
              <i class="fas fa-thumbs-up"/>{' '}
            <span>{likes.length > 0 && (
                  <span> {likes.length} </span>
              )} </span>
            </button>
            <button onClick= {e => removeLike(_id)} type="button" class="btn btn-light">
              <i class="fas fa-thumbs-down"></i>
            </button>
<button onClick= {e => addrequest(_id)} type="button" class="btn btn-light">
              <i class="fa fa-hand-o-right"/>{' '}
            <span>{Requests.length > 0 && (
                  <span> {Requests.length} </span>
              )} </span>
            </button>
            <button onClick= {e => rrequest(_id)} type="button" class="btn btn-light">
              <i class="fa fa-minus-square"></i>
            </button>
            <Link to={`/posts/${_id}`} class="btn btn-primary">
              Discussion {comments.length > 0 && (
                  <span class='comment-count'> {comments.length} </span>
              )} 
            </Link>
            {!auth.loading && user === auth.user._id && (
                            <button onClick={e => deletePost(_id)}     
                            type="button"
                            class="btn btn-danger">
                            <i class="fas fa-times"></i>
                          </button>
            )} 
            </Fragment>}
            
          </div>
        </div>
    )
}

PostItem.defaultProps = {
    showActions: true
}

PostItem.propTypes = {
    post: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    addLike: propTypes.func.isRequired,
    removeLike: propTypes.func.isRequired,
    deletePost: propTypes.func.isRequired,
    addrequest: propTypes.func.isRequired,
    rrequest: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {addLike, removeLike, deletePost,addrequest,rrequest}) (PostItem)
