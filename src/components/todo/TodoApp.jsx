import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorPageComponent from './ErrorPageComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from './security/AuthContext'
import AuthenticatedRoute from './AuthenticatedRoute'
import { TodoComponent } from './TodoComponent'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='*' element={<ErrorPageComponent />}></Route>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>
                        <Route path='/logout' element={<AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                            <WelcomeComponent />
                        </AuthenticatedRoute>
                        }></Route>
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>
                        }></Route>
                    </Routes>
                </BrowserRouter>
                <FooterComponent />
            </AuthProvider>
        </div>
    )
}



