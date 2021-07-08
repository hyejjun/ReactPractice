import React, { Component } from 'react';
import '../css/Consulting.css'
import SubpageTitle from '../component/SubpageTitle';

class Consulting extends Component {
    state = {
        value: '개인정보 어쩌구~~~~~~'
    }
    render() {
        return (
            <>
                <div className="consult_content">
                    {/* <div className="consult_title"><SubpageTitle/></div> */}
                    <div className="consult_title">상담게시판</div>
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
                    <div>
                        <form action="/consult_submit" method="post">
                            <table>
                                <tbody className="consult_table">
                                    <tr>
                                        <th>이름 *</th>
                                        <td>
                                            <input type="text" name="name" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>성별 *</th>
                                        <td>
                                            <input id="male" type="radio" name="gender" />
                                            <label htmlFor="male">남</label>
                                            <input id="female" type="radio" name="gender" />
                                            <label htmlFor="female">여</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>나이 *</th>
                                        <td>
                                            <input type="number" />세
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>이메일 *</th>
                                        <td>
                                            <input type="text" />@ <input type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>전화번호 *</th>
                                        <td>
                                            <input type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>상담내용</th>
                                        <td>
                                            <textarea name="" id="consult_text" cols="30" rows="10"></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="consult_btn_box">
                                <input type="submit" value="상담신청하기" />
                                <input type="button" value="취소" />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Consulting


/*
    여기서 타이틀 /개인정보취급 / 상담정보 각각 컴포넌트로 나눠봐야함
    Childern 활용해서 해보자
*/