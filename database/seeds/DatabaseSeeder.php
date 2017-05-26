<?php

use Illuminate\Database\Seeder;

use App\Task;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

    	Task::truncate();
        factory(Task::class, 10)->create();
    }
}
