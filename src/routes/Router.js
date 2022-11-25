// @ts-nocheck
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

import Counter from '../features/counter/Counter';
import Dogs from '../features/dogs/Dogs';
import Posts from '../features/posts/Posts';

const AppRouter = () => {
    return (
        <Routes>
            <Route
                element={
                    <>
                        <div>
                            <Link to="/posts">Posts</Link>
                            <Link to="/">Counter</Link>
                            <Link to="/dogs">Köpek resimleri</Link>
                        </div>
                        <Outlet />
                    </>
                }
            >
                <Route path="/" element={<Counter />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/dogs" element={<Dogs />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
