import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { FaRegNewspaper, FaRegUser } from 'react-icons/fa';
import { MdEditNote } from 'react-icons/md';
import './BottomNav.css';

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-btn"><AiFillHome size={22} /></Link>
      <Link to="/explore" className="nav-btn"><FiSearch size={22} /></Link>
      <Link to="/career" className="nav-btn"><MdEditNote size={22} /></Link>
    </div>
  );
}
