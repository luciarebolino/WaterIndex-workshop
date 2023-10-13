document.addEventListener('DOMContentLoaded', (event) => {
    const svgObject = document.getElementById('hurricane-svg');
    svgObject.addEventListener('load', () => {
        const svgDoc = svgObject.contentDocument;

        // Hide or show paths initially based on checkbox state
        document.querySelectorAll('#checkboxes input[type=checkbox]').forEach(checkbox => {
            const hurricanePath = svgDoc.getElementById(checkbox.id);
            hurricanePath.style.display = checkbox.checked ? 'block' : 'none';
        });

        // Existing code for toggling paths
        document.querySelectorAll('#checkboxes input[type=checkbox]').forEach(checkbox => {
            const hurricanePath = svgDoc.getElementById(checkbox.id);
            checkbox.addEventListener('change', () => {
                hurricanePath.style.display = checkbox.checked ? 'block' : 'none';
            });
        });
        // Functionality for showing GIFs on polyline click
        const hurricanes = [
            { id: 'ANA', gifs: ['ana-lucia-a.gif', 'ana-lucia-b.gif'] },
            { id: 'LARRY', gifs: ['larry1.gif', 'larry2.gif'] },
            // Add more hurricanes here
        ];

        const createGif = (src) => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;

            const gif = document.createElement('img');
            gif.src = src;
            gif.style.zIndex = '3'
            gif.style.position = 'absolute';
            gif.style.left = `${randomX}px`;
            gif.style.top = `${randomY}px`;
            document.body.appendChild(gif);
        }

        hurricanes.forEach(hurricane => {
            const element = svgDoc.querySelector(`#${hurricane.id} polyline`);

            if (element) {
                element.addEventListener('click', () => {
                    // Randomly select two GIFs
                    const selectedGifs = [];
                    while (selectedGifs.length < 2) {
                        const randomIndex = Math.floor(Math.random() * hurricane.gifs.length);
                        const selectedGif = hurricane.gifs[randomIndex];
                        if (!selectedGifs.includes(selectedGif)) {
                            selectedGifs.push(selectedGif);
                            createGif(selectedGif);
                        }
                    }
                });
            }
        });
    });
    
});
