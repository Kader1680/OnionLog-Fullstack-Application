@extends("layouts.master")
@section("content")

<style>
    .post{
        width: 30%;
        height: 60%;
    }
    .bottom{

    }
</style>

<div class="upload">
    <p>
        Filename:
        <input type="file" multiple="false" accept="image/*" id=finput onchange="upload()">
    </p>

</div>
 @endsection
