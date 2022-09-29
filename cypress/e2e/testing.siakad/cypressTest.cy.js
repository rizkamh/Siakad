describe('User Dapat Membuka Halaman Mahasiswa', () => {
    it('Index Mahasiswa List', () => {
        cy.visit("http://127.0.0.1:8000/mahasiswa");
        cy.get('h2').should('have.text','JURUSAN TEKNOLOGI INFORMASI-POLITEKNIK NEGERI MALANG');
    });
  
  //Fitur Create
    it('Can Create Data', () => {
      cy.visit("http://127.0.0.1:8000/mahasiswa")
      cy.get('.btn-success').click();
      cy.get('#Nim').type("2041720011")
      cy.get('#Nama').type("Rizka Hidayah")
      cy.get('#Email').type("rizkamu@gmail.com")
      cy.get('#Alamat').type("Tulungagung")
      cy.get('#Tanggal_Lahir').type("2002-03-30")
      cy.get('#Jurusan').type("Teknologi Informasi")
      cy.get('#Jenis_Kelamin').type("P")
      cy.get(':nth-child(10) > .form-control').selectFile('Rizkamu.png')
      cy.get('.btn').contains("Submit").and("be.enabled");
      cy.visit("http://127.0.0.1:8000/mahasiswa")
    })

    //Fitur Show
    it('Show Mahasiswa List', () => {
        cy.visit("http://127.0.0.1:8000/mahasiswa");
        //show mahasiswa
        cy.get(':nth-child(10) > .btn-info').click();
        cy.get('.card-header').contains('Detail Mahasiswa').and('be.visible');
        cy.get('.list-group > :nth-child(1)').contains('Nim: 2041720095').and('be.visible');
        cy.get('.list-group > :nth-child(2)').contains('Nama: Rizka Musyarofatul').and('be.visible');
        cy.get('.list-group > :nth-child(3)').contains('Email: aleshariza@gmail.com').and('be.visible');
        //button kembali
        cy.get('.btn').click();
  })

  //Fitur Edit
  it('Can Edit Data', () => {
    cy.visit("http://127.0.0.1:8000/mahasiswa")
    cy.get(':nth-child(10) > .btn-primary').click();
    cy.get('#Nim').type("2041720011")
    cy.get('#Nama').type("Rizka Hidayah")
    cy.get('#Email').type("rizkamu@gmail.com")
    cy.get('#Alamat').type("Tulungagung")
    cy.get('#Tanggal_Lahir').type("2002-03-30")
    cy.get('#Jurusan').type("Teknologi Informasi")
    cy.get('#Jenis_Kelamin').type("P")
    cy.get(':nth-child(11) > .form-control').selectFile('Rizkamu.png')
    cy.get('.btn').contains("Submit").and("be.enabled");
    cy.visit("http://127.0.0.1:8000/mahasiswa")
  })

  //Fitur Delete
  it('Delete Mahasiswa List', () => {
    cy.visit("http://127.0.0.1:8000/mahasiswa");
    //delete mahasiswa
    cy.get(':nth-child(10) > .btn-danger').click();
  });
})