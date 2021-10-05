import React from 'react'

const WidgetLarge = () => {

    const Button = ({ type }) => {
        return <button className={"widget-lg-btn " + type}>{type}</button>
    }


    return (
        <div className="widget-large">
            <h3 className="widget-lg-title">Latest Transactions</h3>
            <table className="widget-lg-table">
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user flex align-center">
                        <img src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/76619250_247201626253941_4195194514224185344_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oN1HrlzF65oAX-UgaTw&_nc_ht=scontent.fhfa1-1.fna&oh=fa1cdcd587f623fc8b5679094ec0f84f&oe=618273C3" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Arik Alexandrov</span>
                    </td>
                    <td className="widget-lg-date">5 Oct 2021</td>
                    <td className="widget-lg-amount">$ 311.00</td>
                    <td className="widget-lg-status"><Button type="Approved" /></td>
                </tr>
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user flex align-center">
                        <img src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/76619250_247201626253941_4195194514224185344_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oN1HrlzF65oAX-UgaTw&_nc_ht=scontent.fhfa1-1.fna&oh=fa1cdcd587f623fc8b5679094ec0f84f&oe=618273C3" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Arik Alexandrov</span>
                    </td>
                    <td className="widget-lg-date">5 Oct 2021</td>
                    <td className="widget-lg-amount">$ 311.00</td>
                    <td className="widget-lg-status"><Button type="Declined" /></td>
                </tr>
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user flex align-center">
                        <img src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/76619250_247201626253941_4195194514224185344_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oN1HrlzF65oAX-UgaTw&_nc_ht=scontent.fhfa1-1.fna&oh=fa1cdcd587f623fc8b5679094ec0f84f&oe=618273C3" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Arik Alexandrov</span>
                    </td>
                    <td className="widget-lg-date">5 Oct 2021</td>
                    <td className="widget-lg-amount">$ 311.00</td>
                    <td className="widget-lg-status"><Button type="Pending" /></td>
                </tr>
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user flex align-center">
                        <img src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/76619250_247201626253941_4195194514224185344_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oN1HrlzF65oAX-UgaTw&_nc_ht=scontent.fhfa1-1.fna&oh=fa1cdcd587f623fc8b5679094ec0f84f&oe=618273C3" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Arik Alexandrov</span>
                    </td>
                    <td className="widget-lg-date">5 Oct 2021</td>
                    <td className="widget-lg-amount">$ 311.00</td>
                    <td className="widget-lg-status"><Button type="Approved" /></td>
                </tr>
                
            </table>
        </div>
    )
}

export default WidgetLarge
