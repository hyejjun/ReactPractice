import React, { Component } from 'react'

class RequestForm extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default RequestForm