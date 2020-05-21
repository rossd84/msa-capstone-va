import React, { Component } from 'react'

class Main extends Component {

  render() {
    const user = this.props.user.map((user) => user.username)
    console.log(user)
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
    <h1 className="display-4">Welcome {user}!</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Main