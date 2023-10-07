var umur = 18;

if (umur >= 18) {
    console.log("Anda adalah seorang dewasa.");
} else {
    console.log("Anda masih anak-anak.");
    
    // Pemeriksaan nested if
    if (umur >= 13 && umur < 18) {
        console.log("Anda adalah seorang remaja.");
    } else {
        console.log("Anda masih seorang anak-anak.");
    }
}