import { levels } from '../data/courses';
import React, { useState } from 'react';

const CourseFilters = () => {
    // Estado para controlar quais menus estão abertos
    const [openMenu, setOpenMenu] = useState({
        category: false,
        rating: false,
        instructor: false,
        level: false, // deve ser 'level'
        duration: false,
    });

    return (
        <div>
            {/* ...outros filtros... */}

            {/* Botão/menu de Nível */}
            <button onClick={() => setOpenMenu({ ...openMenu, level: !openMenu.level })}>
                Nível
            </button>
            {openMenu.level && (
                <div>
                    {levels.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            )}

            {/* ...outros filtros... */}
        </div>
    );
};

export default CourseFilters;