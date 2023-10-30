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
       { 
                id: 'ANA', 
                gifs: [
                    'https://d2w9rnfcy7mm78.cloudfront.net/24135019/original_88a5bcb14ec6f7e04a652789d890646d.gif?1697154638?bc=0', 
                    'https://d2w9rnfcy7mm78.cloudfront.net/24135021/original_5cce18c5c95e2a793b18e7c223845524.gif?1697154646?bc=0'
                ] 
            },
            { id: 'SAM', gifs: [
                'https://d2w9rnfcy7mm78.cloudfront.net/24272560/original_a08d8616078aca348114c9b8c077ab43.gif?1697836873?bc=0', 
                'https://d2w9rnfcy7mm78.cloudfront.net/24272557/original_8a202b514225caa001731a287658a3e2.gif?1697836864?bc=0'
            ]  },
            { 
                id: 'MINDY', 
                gifs: [
                    'https://d2w9rnfcy7mm78.cloudfront.net/24142769/original_cd698596a6ed9e891d80fbd2c390f844.gif?1697197337?bc=0', 
                    'https://d2w9rnfcy7mm78.cloudfront.net/24142756/original_b596896e272a9d9deb81f16cbefb8cd1.gif?1697197313?bc=0'
                ] 
            },
            { id: 'WANDA', gifs: [
                'https://d2w9rnfcy7mm78.cloudfront.net/24266287/original_a9ff7decb81081061b442315aa33332b.gif?1697812157?bc=0', 
                'https://d2w9rnfcy7mm78.cloudfront.net/24266291/original_a9bc39ddc2873f54cae1a464fa1afa36.gif?1697812164?bc=0'
            ]  },
            { 
                id: 'DANNY', 
                gifs: [
                    'https://d2w9rnfcy7mm78.cloudfront.net/24266227/original_f022064b50c60d54400e44572bad206a.gif?1697812023?bc=0', 
                    'https://d2w9rnfcy7mm78.cloudfront.net/24266226/original_4e99ee6e3a4607d4e1ec8e4fb6cd12cd.gif?1697812022?bc=0'
                ] 
            },
            { id: 'LARRY', gifs: [
                'https://d2w9rnfcy7mm78.cloudfront.net/24264630/original_46d4388fbec3976ddeef9467ef9bd5a7.gif?1697805904?bc=0', 
                'https://d2w9rnfcy7mm78.cloudfront.net/24264656/original_5d4828ea95209d778cf2e0454479b86c.gif?1697806084?bc=0'
            ]  },

            { id: 'PETER', gifs: [
                'https://d2w9rnfcy7mm78.cloudfront.net/24142776/original_ed6add693ed0a22d1227e9c68060e671.gif?1697197353?bc=0', 
                'https://d2w9rnfcy7mm78.cloudfront.net/24263131/original_4425057600462ce7d8544ab3992437ec.gif?1697798521?bc=0'
            ]  },

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
