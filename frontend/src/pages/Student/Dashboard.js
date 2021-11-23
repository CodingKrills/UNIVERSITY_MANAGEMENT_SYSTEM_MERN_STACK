import React from 'react'
import StudentSideBar from '../../components/SideBar/StudentSideBar'
import Header from '../../components/Header/Header'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <StudentSideBar />
            <div className="dashboard-container">
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 2</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 3</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 4</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard