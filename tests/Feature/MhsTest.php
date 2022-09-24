<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Mahasiswa;

class MhsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/mahasiswa');

        $response->assertStatus(200);
    }

    public function test_create(){
        $response = $this->get('/mahasiswa');

        $mhs = Mahasiswa::create([
        'Nim' => '2041720121',
        'Nama' => 'Rizka M',
        'Email'=> 'RizkaMusya@gmail.com',
        'Alamat'=>'Tulungagung',
        'Tanggal_Lahir'=>'2002-03-30',
        'Jenis_Kelamin'=>'P',
        'Jurusan'=>'Teknologi Informasi',
        'Foto' =>'Foto testing',
        ]); 
        $response->assertStatus(200);

    }

    public function test_read(){
        
        $response = $this->get('/mahasiswa');
        $response->assertSee('Rizka M');
        $response->assertStatus(200);


    }

    public function test_update(){

        $mhs= Mahasiswa::where('Nama','Rizka M')-> update ([
            'NIM'=>'2041720040',
        ]);

        $response = $this->get('/mahasiswa');
        $response->assertSee(200);

    }

    public function test_delete(){
        
        $mhs= Mahasiswa::where('Nama','Rizka M')-> delete();
        $response = $this->get('/mahasiswa');

        $response->assertStatus(200);
        $response->assertDontSee('NIM');
    }
}