
if (document.getElementById('forcopy')) {
	// すでに結果ページ
} else {
	var form = document.getElementById('form');
	if (form && form.elements['u'].value) {
		// 名前が入力されている
		form.submit();
	}
}

