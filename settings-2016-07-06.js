var Geo={};

function tracarRota(latDestino, lngDestino)
{
	$('.section-mapa .button').html('<i class="fa fa-spin fa-spinner"></i> Por favor, aguarde...').css('cursor','not-allowed').attr('disabled',true);
	
	Geo.latDestino = latDestino;
	Geo.lngDestino = lngDestino;
	
	if (navigator.geolocation) 
	{
		navigator.geolocation.getCurrentPosition(function(position) {
		
			Geo.latOrigem = position.coords.latitude;
			Geo.lngOrigem = position.coords.longitude;	
			
			showMap();
		});
	} 
	
	else 
	{
		showMap();
	}
}

function showMap()
{
	$('.section-mapa iframe').remove();
			
	if ( typeof(Geo.latOrigem) != null && typeof(Geo.lngOrigem) != null && typeof(Geo.latDestino) != null && typeof(Geo.lngDestino) != null )
	{
		$('.section-mapa header').after('<iframe class="iframe routes" src="http://venezaconstrucao.com.br/mapa/routes.php?latitude=' + Geo.latDestino + '&longitude=' + Geo.lngDestino + '&latitude2=' + Geo.latOrigem + '&longitude2=' + Geo.lngOrigem + '" height="271" width="100%" style="border:0 none;display:none;margin:0 auto;" scrolling="no"></iframe>');
	}
	
	else if ( typeof(Geo.latDestino) != null && typeof(Geo.lngDestino) != null )
	{
		$('.section-mapa header').after('<iframe class="iframe map" src="http://venezaconstrucao.com.br/mapa/mapa.php?latitude=' + Geo.latDestino + '&longitude=' + Geo.lngDestino + '" height="271" width="100%" style="border:0 none;display:none;margin:0 auto;" scrolling="no"></iframe>');	
	}
	
	$('.section-mapa iframe').fadeIn(500);
	
	setTimeout(function(){
		
		$('.section-mapa .button').html('<i class="fa fa-road"></i> Traçar Rota').css('cursor','pointer').attr('disabled',false);
	});
}