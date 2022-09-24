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

        $mhs = Mahasiswa::create([]); 
        $response->assertStatus(200);
        
        

    }

    public function test_delete(){
        $response = $this->get('/mahasiswa');

        $response->assertStatus(200);
        $response->assertSee("Apakah Anda Yakin Menghapus Data Mahasiswa?");
    }
}