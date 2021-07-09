import React, { Component } from 'react'

class Privacy extends Component {
    state = {
        value: '개인정보 어쩌구~~~~~~'
    }
    render() {
        return (
            <>
                <div className="agreement_div">
                    <div>개인정보취급방침</div>
                    <div>
                        <textarea name="" id="personal_info" cols="30" rows="10" value={this.state.value} readOnly>
                        </textarea>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="disagree">동의하지않습니다</label>
                            <input id='disagree' type="radio" name="agreement" />
                        </span>
                        <span>
                            <label htmlFor="agree">동의합니다</label>
                            <input id='agree' type="radio" name="agreement" />
                        </span>
                    </div>
                </div>
            </>
        )
    }
}

export default Privacy