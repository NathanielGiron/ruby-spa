$(document).ready(function() {
	$('#home-btn').click(function(e) {
		e.preventDefault();

		$.ajax({
			url: '/creatures',
			method: 'GET',
			success: function(data) {
				var contentSection = $('#content-section')
				contentSection.html('');

				data.forEach(function(hobby) {
					contentSection.append(
						'<a href="/creature/' + hobby.id +'" class="show-link"><h3>' + hobby.name +'</h3></a><p>' + hobby.description +'</p>'
					)
				})
			},
			error: function(err) {}
		});
	});

	$('#content-section').on('click', 'a.show-link', function(e) {
		e.preventDefault();

		var aTag = $(this);

		$.ajax({
			url: aTag.attr('href'),
			method: 'GET',
			success: function(data) {
				console.log(data);
				$('#content-section').html('<h3>' + data.name + '</h3><p>' + data.description + '</p>');
			},
			error: function(err) {
				console.log(err)
			}
		});
	});
});