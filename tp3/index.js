$(document).ready(function () {
	$("button").click(function () {
		if ($("#nom").val().length < 5 || $("#prenom").val().length < 5 || validateEmail($("#mail").val())==false || $("#addr").val().length < 5 || validateDate()==false) {
			$('#modaltit').text('Erreur dans le formulaire');
			$('#modal1').text('Tous les champs sont obligatoires');
			$('#myModal').modal("show");
		}
		else {
			$('#datecheck').val($("#datepicker").val());
 			$('#modaltit').text('Bienvenue ' + $("#nom").val());
			$("#modal1").text('Vous êtes nés le ' + $("#datepicker").val() + ' et vous habitez');
			$("#myModal .modal-body a").attr("href", "https://maps.google.com/maps?q=" + $("#addr").val() + "&markers=" + $("#addr").val());
			$("#myModal .modal-body a img").attr("src", "https://maps.googleapis.com/maps/api/staticmap?size=400x250&center=" + $("#addr").val() + "&markers=" + $("#addr").val() + "&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
			$("#modal3").text($("#addr").val());
			$('#myModal').modal('show');
 		}
	});
	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
 	$("#datepicker").datepicker({
 		dateFormat: "dd/mm/yy",
 		maxDate: 31
 	});
});