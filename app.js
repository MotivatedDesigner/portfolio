new fullpage('#fullpage',{
    autoScrolling:true,
    anchors: ['s1', 's2'],
    responsive: 900,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Section 0', 'Section 1'],
    menu:'#menu',
    css3: true,
    easing: 'easeInOutCubic',
    parallax: true,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'}
});